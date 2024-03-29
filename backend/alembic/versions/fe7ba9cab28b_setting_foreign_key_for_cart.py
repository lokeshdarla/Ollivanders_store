"""Setting Foreign key for Cart

Revision ID: fe7ba9cab28b
Revises: 403dcd9df50c
Create Date: 2024-01-07 19:03:42.163948

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fe7ba9cab28b'
down_revision: Union[str, None] = '403dcd9df50c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'Users', ['id'])
    op.add_column('cart', sa.Column('UserID', sa.UUID(), nullable=True))
    op.create_foreign_key(None, 'cart', 'Users', ['UserID'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'cart', type_='foreignkey')
    op.drop_column('cart', 'UserID')
    op.drop_constraint(None, 'Users', type_='unique')
    # ### end Alembic commands ###
