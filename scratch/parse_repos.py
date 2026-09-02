import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

for path in sorted(glob.glob('scratch/readmes/*.md')):
    name = os.path.splitext(os.path.basename(path))[0]
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    images = re.findall(r'!\[.*?\]\((.*?)\)|<img.*?src=[\"\'](.*?)[\"\']', text)
    img_urls = [i[0] if i[0] else i[1] for i in images]
    
    links = re.findall(r'https?://[^\s\)\"\'>]+', text)
    live_links = [l for l in links if any(k in l.lower() for k in ['vercel.app', 'onrender.com', 'netlify.app', 'github.io', 'pages.dev', 'app'])]
    
    print('==================================================')
    print('REPO:', name)
    print('IMAGES:', img_urls)
    print('LIVE CANDIDATE LINKS:', live_links)
    first_lines = [l for l in text.splitlines() if l.strip()][:5]
    print('SUMMARY:\n' + '\n'.join(first_lines))
