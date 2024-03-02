def test_create_address(authorized_client):
    address_data = {
        "door_no": "24-10-1",
        "landmark": "SRM University Road",
        "pincode": "123445"
    }
    response = authorized_client.post("/addresses/", json=address_data)
    assert response.status_code == 201
    created_address = response.json()
    AddressID = created_address.get("AddressID")
    assert AddressID is not None, "The 'AddressID' attribute is missing in the created address"


def test_read_address(authorized_client, test_address):
    AddressID = test_address.get("AddressID")
    assert AddressID is not None, "The 'AddressID' attribute is missing in the created address"

    response = authorized_client.get(f"/addresses/{AddressID}")
    assert response.status_code == 200
    retrieved_address = response.json()
    assert retrieved_address["AddressID"] == AddressID


def test_update_address(authorized_client, test_address):
    AddressID = test_address.get("AddressID")
    assert AddressID is not None, "The 'AddressID' attribute is missing in the created address"

    updated_address_data = {
        "door_no": "25-10-2",
        "landmark": "Updated Landmark",
        "pincode": "543210"
    }
    response = authorized_client.put(f"/addresses/{AddressID}", json=updated_address_data)
    assert response.status_code == 200
    updated_address = response.json()

    assert updated_address["door_no"] == updated_address_data["door_no"]
    assert updated_address["landmark"] == updated_address_data["landmark"]
    assert updated_address["pincode"] == updated_address_data["pincode"]


def test_delete_address(authorized_client, test_address):
    AddressID = test_address.get("AddressID")
    assert AddressID is not None, "The 'AddressID' attribute is missing in the created address"

    response = authorized_client.delete(f"/addresses/{AddressID}")
    assert response.status_code == 204
    
    response = authorized_client.get(f"/addresses/{AddressID}")
    assert response.status_code == 404
