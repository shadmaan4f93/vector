from starlette.routing import Route
from . import views

# The route configuration
routes = [
    Route("/", endpoint=views.home, methods=["GET"], name="home"),
    Route("/cards", endpoint=views.card_list, methods=["GET"], name="card-list"),
    Route("/card", endpoint=views.add_card, methods=["POST"], name="add-card"),
]