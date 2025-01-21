from rest_framework import status
from rest_framework.response import Response

def custom_response(status_code, message, data=None):
    if data is None:
        data = []
    return Response({
        "statusCode": status_code,
        "message": message,
        "data": data
    })
