import redis
import time

def worker(client):
    print("Worker running...")
    time.sleep(30)  # Simulate work
    print("Work completed.")
    client.set('work', 'completed')


def main():
    redis_client = redis.Redis(host='localhost', port=6379, db=0)
    p = redis_client.pubsub()
    p.subscribe(**{'work': lambda x: worker(redis_client)})
    p.run_in_thread(sleep_time=0.001)


if __name__ == "__main__":
    main()
