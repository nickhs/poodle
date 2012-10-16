import Image
import os


def start():
    filenames = os.listdir('./rewards')

    count = 0
    for fn in filenames:
        im = Image.open('./rewards/' + fn)

        im = im.resize((600, 440), Image.ANTIALIAS)

        prefix = './static/img/'
        im.save(prefix + str(count) + '.png')
        count += 1
