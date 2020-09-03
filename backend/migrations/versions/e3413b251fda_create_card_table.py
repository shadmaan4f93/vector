"""Create card table

Revision ID: e3413b251fda
Revises: 
Create Date: 2020-09-03 20:29:37.949199

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3413b251fda'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'card',
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("type", sa.String),
        sa.Column("title", sa.String),
        sa.Column("img", sa.String),
        sa.Column("position", sa.Integer),
    )

def downgrade():
    op.drop_table('card')
