def update_stok_product(sender, instance, **kwargs):
    print("======================")
    producto = instance.product
    producto.num_sale = producto.num_sale + instance.count
    producto.count = producto.count - instance.count
    producto.save()
    return instance