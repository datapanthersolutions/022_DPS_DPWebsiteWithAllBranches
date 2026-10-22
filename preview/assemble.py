# Builds artifact/index.html (single page for the claude.ai preview) from preview-dist,
# and a local copy wrapped like the artifact host for testing.
import glob, os, sys
d = 'preview-dist'
css = open(glob.glob(d + '/assets/*.css')[0], encoding='utf-8').read().replace('url(/img/', 'url(img/')
js = open(glob.glob(d + '/assets/*.js')[0], encoding='utf-8').read()
for q in ('"', "'", '`'):
    js = js.replace(q + '/img/', q + 'img/')
js = js.replace('</script', '<\\/script')
js = ''.join(c if ord(c) < 128 else ('\\u%04x' % ord(c) if ord(c) < 0x10000 else c) for c in js)
head = ('<title>Data Panther Website</title>\n'
        '<link rel="preconnect" href="https://fonts.googleapis.com" />\n'
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\n'
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />\n')
html = head + '<style>html,body{background:#fff}\n' + css + '</style>\n<div id="root"></div>\n<script type="module">\n' + js + '\n</script>\n'
os.makedirs('artifact', exist_ok=True)
open('artifact/index.html', 'w', encoding='utf-8').write(html)
if len(sys.argv) > 1:
    wrapped = ('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
               '<style>:root{color-scheme:light}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n' + html + '\n</body></html>')
    open(sys.argv[1], 'w', encoding='utf-8').write(wrapped)
print('artifact page', len(html) // 1024, 'KB')
