def test_create_product(client):
  product_data={
    "ProductName": "Test Product Name",
    "Description": " Product Description", 
    "Price": 4321.00, 
    "units": 13, 
    "ImageURL":"img.placeholder.com"
    }
  res=client.post("/products",json=product_data)
  assert res.status_code==201


def test_single_product(client, test_product):
    product_id = test_product.get("ProductID")
    assert product_id is not None, "The 'ProductID' attribute is missing in the test product"
    response = client.get(f"/products/{product_id}")
    assert response.status_code == 200
    assert response.json()["ProductName"] == test_product["ProductName"]


def test_update_product(client, test_product):
    new_product_data = {
        "ProductName": "Test Product Name",
        "Description": "Product Description", 
        "Price": 4321.00, 
        "units": 13, 
        "ImageURL": "img.placeholder.com"
    }

    product_id = test_product.get("ProductID")
    assert product_id is not None, "The 'ProductID' attribute is missing in the test product"
    response = client.put(f"/products/{product_id}", json=new_product_data)

    assert response.status_code == 200

    updated_product_response = client.get(f"/products/{product_id}")
    assert updated_product_response.status_code == 200

    updated_product = updated_product_response.json()
    assert updated_product["ProductName"] == new_product_data["ProductName"]
    assert updated_product["Price"] == new_product_data["Price"]
    
    revert_data = {
        "ProductName": test_product["ProductName"],
        "Description": test_product["Description"],
        "Price": test_product["Price"],
        "units": test_product["units"],
        "ImageURL": test_product["ImageURL"]
    }

    revert_response = client.put(f"/products/{product_id}", json=revert_data)
    assert revert_response.status_code == 200 

def test_delete_product(client,test_product):
  product_id=test_product.get("ProductID")
  assert product_id is not None, "The 'ProductID' attribute is missing in the test product"
  res=client.delete(f"/products/{product_id}")
  assert res.status_code==204
