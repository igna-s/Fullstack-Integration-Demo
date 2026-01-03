from rest_framework import generics
from .models import Empleado
from .serializers import EmpleadoSerializer

# GET (Listar) y POST (Crear)
class EmpleadoListCreateView(generics.ListCreateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

# GET (Uno), PUT (Editar), DELETE (Borrar) por ID
class EmpleadoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    lookup_field = 'pk'