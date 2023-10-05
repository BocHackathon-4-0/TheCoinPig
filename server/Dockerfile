FROM python:3.11



COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY  . /app

WORKDIR /app

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000" ]
