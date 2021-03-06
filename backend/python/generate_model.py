import tensorflow as tf
import tensorflowjs as tfjs

model = tf.keras.models.Sequential(
    [
        tf.keras.layers.Flatten(input_shape=(28, 28)),
        tf.keras.layers.Dense(69, activation="relu"),
        tf.keras.layers.Dropout(0.15),
        tf.keras.layers.Dense(42, activation="relu"),
        tf.keras.layers.Dropout(0.15),
        tf.keras.layers.Dense(10),
    ]
)

mnist = tf.keras.datasets.mnist

(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

loss_fn = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer="adam", loss=loss_fn, metrics=["accuracy"])
model.fit(x_train, y_train, epochs=5)


# Saving a TensorFlow JS JSON version (which also create the directory)
tfjs.converters.save_keras_model(model, "./saved_model/")
# Saving a hdf5 version
model.save("./saved_model/model.hdf5")
