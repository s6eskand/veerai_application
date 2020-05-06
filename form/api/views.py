from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from form.models import Form
from .serializers import FormSerializer

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