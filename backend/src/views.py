from starlette.responses import PlainTextResponse, JSONResponse
from .models import card
from .settings import database

async def home(request):
    """ Root view to show message """
    return PlainTextResponse("Vector Demo api")

async def card_list(request):
    """ This method is used to get card data from the card table """
    try:
        # defination of selet query
        query = card.select()
        # Executing select query to fetch card data from card table
        results = await database.fetch_all(query)
        content = [
            {
                "id": result["id"],
                "type": result["type"],
                "title": result["title"],
                "img": result["img"],
                "position": result["position"]
            }
            for result in results
        ]
        return JSONResponse({"status": True, "message": "Success", "data": content} )
    except:
        return JSONResponse({"status": False, "message": "Technical problem!", "data": []})
    

async def add_card(request):
    """ This method is used to insert data into the card table """
    try:
        # Getting data from the request
        data = await request.json()
        # Making insert query
        query = card.insert().values(
        type=data["type"],
        title=data["title"],
        img=data["img"],
        position=data["position"]
        )
        # Executing insert query to insert data into card table
        await database.execute(query)
        return JSONResponse({"status": True, "message": "Success"})
    except:
        return JSONResponse({"status": False, "message": "Technical problem!"})
