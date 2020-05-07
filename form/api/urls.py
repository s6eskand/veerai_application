from django.urls import path

# standard imports for CRUD REST API, including FormListCreateView which allows for GET and POST methods
from .views import (
    FormListView,
    FormCreateView,
    FormUpdateView,
    FormDeleteView,
    FormListCreateView
)

# url patterns to show the actual API using the django rest framework
urlpatterns = [
    path('', FormListView.as_view()),
    path('create/', FormCreateView.as_view()),
    path('<pk>/update/', FormUpdateView.as_view()),
    path('<pk>/delete/', FormDeleteView.as_view()),
    path('list-create/', FormListCreateView.as_view()),
]