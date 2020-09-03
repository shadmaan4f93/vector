import sqlalchemy

metadata = sqlalchemy.MetaData()

# Card table schema definition
card = sqlalchemy.Table(
    "card",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("type", sqlalchemy.String),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("img", sqlalchemy.String),
    sqlalchemy.Column("position", sqlalchemy.Integer),
)