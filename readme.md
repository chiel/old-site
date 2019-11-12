# kunkels.me

Stuff that was done outside of this repository:

One thing that is not really explained by just looking at [the CI workflow file](.github/workflows/ci.yaml) is how to hook kubernetes up to the GitHub package registry, so you can refer to the [kubernetes documentation on **Specifying ImagePullSecrets on a Pod**](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod).

Another thing that is not really visible here is the setup of the kubernetes cluster. I use [DigitalOcean Kubernetes](https://www.digitalocean.com/products/kubernetes/) and followed a guide on [how to set up an nginx ingress using helm](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm).

I've actually automated all of this using terraform which allows me to set up a fully functional kubernetes cluster without any manual intervention.
