"""Created UUID for user

Revision ID: 403dcd9df50c
Revises: 5f6c4dcb1558
Create Date: 2024-01-07 19:00:04.502647

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '403dcd9df50c'
down_revision: Union[str, None] = '5f6c4dcb1558'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Users', sa.Column('id', sa.UUID(), server_default=sa.text('gen_random_uuid()'), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('Users', 'id')
    # ### end Alembic commands ###
