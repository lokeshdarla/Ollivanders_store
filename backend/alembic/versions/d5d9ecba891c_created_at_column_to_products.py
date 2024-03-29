"""Created at Column to Products

Revision ID: d5d9ecba891c
Revises: 277baa61edbd
Create Date: 2024-02-28 21:21:52.824935

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd5d9ecba891c'
down_revision: Union[str, None] = '277baa61edbd'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Products', sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('Products', 'created_at')
    # ### end Alembic commands ###
