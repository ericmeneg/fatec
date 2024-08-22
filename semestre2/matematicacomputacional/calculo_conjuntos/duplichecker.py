def dupeBoot(a,b):
    c = a + b
    for i in range(0,len(a)):
        for j in range(0,len(b)):
            if a[i] == b[j]:
                c.pop(i)
    return c

#this is not working, I think it's because the pop method causes the indexing for all items after the popped item to change
#after it takes effect.
a = [1,2,3,4,5]
b = [1,3,5,7]

print(dupeBoot(a,b))
#desired result would be [1,2,3,4,5,7]


# def dupeBootSingle(a):
#     b = a
#     toBoot = []
#     for i in range(0,(len(a)-1)):
#         for j in range(1,len(a)-1):
#             if a[i] == a[j]:
#                 toBoot.append(a[i])
#                 continue
#     print(toBoot)
#     for i in toBoot:
#         b.remove(i)
#     return b

# a = [1,1,1,2,3,4,5]
# print(dupeBootSingle(a))