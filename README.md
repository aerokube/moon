# Moon
[![Docker Pulls](https://img.shields.io/docker/pulls/aerokube/moon.svg)](https://hub.docker.com/r/aerokube/moon)


Moon is a commercial closed-source enterprise [Selenium](https://en.wikipedia.org/wiki/Selenium_(software)) implementation using [Kubernetes](https://kubernetes.io/) to launch browsers.

![Moon Animation](img/moon-animation.gif)

## Pricing Model

* The only limitation that determines final Moon price is the **total number of browser pods** being run in parallel.
* You can run up to **4 (four)** parallel pods for free. Everything on top of free limit is paid as a subscription.
* **Detailed pricing** information is available in respective documentation [section](https://aerokube.com/moon/latest/#_pricing).
* Currently we provide **free evaluation license keys** for any number of browser pods: https://moon.aerokube.com/

## Free Support

* Detailed [documentation](http://aerokube.com/moon/latest/)
* Telegram [support channel](https://t.me/aerokube_moon)
* Support by [email](mailto:support@aerokube.com)
* Issue [tracker](https://github.com/aerokube/moon/issues)
* YouTube [channel](https://www.youtube.com/channel/UC9HvE3FNfTvftzpvXi9c69g)

## Features

The main idea behind Moon is to be easily installable and require zero maintenance.

### One-command Installation

Having a running [Kubernetes](https://kubernetes.io/) cluster and `kubectl` pointing to it you can launch free Moon cluster with this one-liner:

```
$ git clone https://github.com/aerokube/moon-deploy.git && cd moon-deploy && kubectl apply -f moon.yaml
```

To obtain Moon load balancer IP address use the following command:

```
$ kubectl get svc -n moon
NAME      TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                         AGE
moon      LoadBalancer   10.63.242.109   104.154.161.58   4444:31894/TCP,8080:30625/TCP   1m
```

Now use the following Selenium URL in your code:
```
http://104.154.161.58:4444/wd/hub
```

We also provide [detailed installation video](https://www.youtube.com/watch?v=x6MjkS_31e4). 

### Automatic Browser Management

![Browsers](img/available-browsers.png)

* We maintain ready to use images for **Firefox**, **Chrome**, **Opera** and **Android**.
* New browser versions are automatically accessible right after releases.

### Scalability and Fault Tolerance

* Your cluster size is **automatically** determined by Kubernetes depending on the load.
* Moon is completely **stateless** and allows to run an **unlimited** number of replicas behind load balancer.
* **No additional configuration** is required to add a new Moon replica.
* **User requests are not lost** even in case of an accidental crash or downtime of the replica.

### Efficient and Lightning Fast

* Completely new Selenium protocol implementation using lightning fast [Golang](https://golang.org/).
* One Moon replica consumes **0.5 CPU** and **512 Mb RAM** maximum.
* One Moon replica is able to work with **thousands** of running sessions.
* **No Selenium Grid** components used.

### Logs and Video

* You can access live browser screen and logs for debugging purposes during test run.
* Any browser session can be saved to a video file using desired codec, frame rate and screen size.
* Logs and video files can be automatically uploaded to [S3](https://en.wikipedia.org/wiki/Amazon_S3)-compatible storage.

## Complete Guide

Complete reference guide can be found at: http://aerokube.com/moon/latest/

