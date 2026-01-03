from django.db import models

class Empleado(models.Model):
    idEmpleado = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    departamento = models.CharField(max_length=100, null=False, blank=False)
    # Decimal(10,2) para moneda
    sueldo = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'empleado'

    def __str__(self):
        return self.nombre