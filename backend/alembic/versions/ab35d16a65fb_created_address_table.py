"""Created Address Table

Revision ID: ab35d16a65fb
Revises: fe7ba9cab28b
Create Date: 2024-01-07 19:10:29.206992

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ab35d16a65fb'
down_revision: Union[str, None] = 'fe7ba9cab28b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('address',
    sa.Column('AddressID', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('door_no', sa.String(), nullable=False),
    sa.Column('landmark', sa.String(), nullable=True),
    sa.Column('pincode', sa.String(), nullable=True),
    sa.Column('UserID', sa.UUID(), nullable=False),
    sa.ForeignKeyConstraint(['UserID'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('AddressID')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('address')
    # ### end Alembic commands ###