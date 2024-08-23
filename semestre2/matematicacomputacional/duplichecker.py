def dupeBooter(a):
    i=0
    while i <= len(a):
        for j in (range(i+1,len(a)-i)):
            if a[i] == a[j]:
                a.pop(i)
                i += 1
                break
        i += 1
    return a