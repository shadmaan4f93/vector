from starlette.applications import Starlette
from src.middleware import middleware
from src.routes import routes

from src import settings


app = Starlette(
    routes=routes,
    middleware=middleware,
    on_startup=[settings.database.connect],
    on_shutdown=[settings.database.disconnect]
)