FROM python:3.7-slim

# Establecer el directorio de trabajo en el contenedor a /app
WORKDIR /app

# Agregar el contenido del directorio actual al contenedor en /app
ADD . /app

# Instalar cualquier paquete necesario especificado en requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Ejecutar app.py cuando se lanza el contenedor
CMD ["python", "app.py"]