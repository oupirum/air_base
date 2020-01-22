# Pulkovo departments

# WIP

## How to run:
<pre>
$ docker-compose up --build
</pre>
Then web app will be available at `localhost:8000`

## Run for production:
Edit `.env` and `.env_db` files (set up passwords, IPs, etc).
Then run 
<pre>
$ docker-compose -f ./docker-compose.prod.yml up --build 
</pre>
