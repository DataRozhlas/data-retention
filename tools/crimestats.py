#%%
import pandas as pd
import requests


# %%
tc = [
    828,
    511,
    865,
    173,
    174,
    785,
    635,
]

# %%
out = []
for rok in range(2010, 2015):
    url = 'https://www.policie.cz/soubor/12-celkova-kriminalita-za-obdobi-od-01-01-{0}-do-31-12-{0}.aspx'.format(str(rok))
    tmp = pd.read_excel(url, engine='xlrd', header=None)
    for cin in tc:
        if len(tmp[tmp[1] == cin]) > 0:
            t = list(tmp[tmp[1] == cin][[1, 2, 3, 6]].values[0])
            t.append(rok)
            out.append(t)
        else:
            print(cin, rok)

# %%
out.sort(key=lambda x: x[0])

# %%
out
# %%
d = {}
for rec in out:
    if rec[4] not in d:
        d[rec[4]] = []
    d[rec[4]].append(round((rec[3] / rec[2]) * 100, 2))

# %%
d
