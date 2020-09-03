import databases
from starlette.config import Config

# Setting up environment variable in starlette
config = Config(".env")
DATABASE_URL = config('DATABASE_URL')
DEBUG = config("DEBUG", cast=bool, default=False)


database = databases.Database(DATABASE_URL)