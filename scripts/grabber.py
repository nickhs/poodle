import bootstrap
from models import Campaign

actives = Campaign.get_active()
urls = []

f = open('urls.txt', 'w')

for active in actives:
    rewards = active.get_reward_groups()
    for reward in rewards:
        url = reward.image_url
        urls.append(url)

for url in urls:
    f.write(url + '\n')
    print url

f.close()
