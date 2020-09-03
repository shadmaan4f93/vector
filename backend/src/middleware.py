from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.gzip import GZipMiddleware

# Middleware configuration
middleware = [
    Middleware(GZipMiddleware),
    Middleware(CORSMiddleware, allow_origins=["*"]), # CORSMiddleware to allow cros origin acces for all host
]