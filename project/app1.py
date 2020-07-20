from firebase_admin import db
ref=db.reference('server/saving-data/fireblog/posts')
print(ref.get())