import urllib
import post_process

if __name__ == "__main__":
    f = open('urls.txt', 'r')

    count = 0
    for line in f:
        urllib.urlretrieve(line, line.split('/')[-1])

    f.close()

    post_process.start()
