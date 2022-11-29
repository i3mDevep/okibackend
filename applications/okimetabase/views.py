from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
import jwt
import time


def index(request):
    METABASE_SITE_URL = "http://okimetabase.herokuapp.com"
    METABASE_SECRET_KEY = "4c1b9d5bde84995de402d3051cf63bdf1e2dfef41728221271fdbe531fe8f6cb"

    payload = {
    "resource": {"dashboard": 1},
    "params": {
        
    },
    "exp": round(time.time()) + (60 * 10) # 10 minute expiration
    }
    token = jwt.encode(payload, METABASE_SECRET_KEY, algorithm="HS256")

    iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" +  token.decode("utf8")  + "#bordered=true&titled=true"

    return JsonResponse({'urlFrame': iframeUrl })
