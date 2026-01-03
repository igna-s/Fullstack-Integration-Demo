from django.urls import path
from .views import EmpleadoListCreateView, EmpleadoDetailView

urlpatterns = [
    # Fíjate que ahora dice 'empleados/' con la barra al final
    path('empleados/', EmpleadoListCreateView.as_view(), name='empleado-list-create'),
    
    # Aquí también: '<int:pk>/' con la barra al final
    path('empleados/<int:pk>/', EmpleadoDetailView.as_view(), name='empleado-detail'),
]