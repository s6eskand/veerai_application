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