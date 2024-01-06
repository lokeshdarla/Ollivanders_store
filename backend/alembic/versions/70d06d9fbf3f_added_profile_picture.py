"""Added profile picture

Revision ID: 70d06d9fbf3f
Revises: e9fcbc2664c4
Create Date: 2024-01-06 19:03:51.477429

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '70d06d9fbf3f'
down_revision: Union[str, None] = 'e9fcbc2664c4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Users', sa.Column('picture', sa.String(), nullable=True))
    op.create_unique_constraint(None, 'Users', ['picture'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'Users', type_='unique')
    op.drop_column('Users', 'picture')
    # ### end Alembic commands ###
