from django.urls import path

from .views import (
    FormListView,
    FormCreateView,
    FormUpdateView,
    FormDeleteView
)

urlpatterns = [
    path('', FormListView.as_view()),
    path('create/', FormCreateView.as_view()),
    path('<pk>/update/', FormUpdateView.as_view()),
    path('<pk>/delete/', FormDeleteView.as_view())
]