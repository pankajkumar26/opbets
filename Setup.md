# Setup

## Backend

### Create Virtual Environment

```bash
python -m venv env
```

### Install required packages/modules/libraries

```bash
pip install -r requirements.txt
```

### Install dev packages/modules/libraries

```bash
pip install -r dev-requirements.txt
```

### Create .env file

```env
FLASK_APP=app
FLASK_ENV=development
SECRET_KEY=lkasjdf09ajsdkfljalsiorj12n3490re9485309irefvn,u90818734902139489230
DATABASE_URL=postgresql://<username>:<password>@localhost/<db_name>
```

### Run DB Migrations

```bash
flask db upgrade
```

### Insert Seed Data

```bash
flask seed all
```

### Run Flask App (Backend)

```bash
flask run
```
