from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView,
    ListCreateAPIView,
)
from form.models import Form
from .serializers import FormSerializer

# creating the actual classes for the API views so that they render with the correct data being displayed

class FormListCreateView(ListCreateAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer

class FormListView(ListAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class FormCreateView(CreateAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class FormUpdateView(UpdateAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class FormDeleteView(DestroyAPIView):
    queryset = Form.objects.all()
    serializer_class = FormSerializer