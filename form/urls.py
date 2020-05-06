from django.urls import path
from . import views
from rest_framework import routers
from .api import AccountViewSet

router = routers.DefaultRouter()
router.register('api/form', AccountViewSet, 'form')

urlpatterns = router.urls