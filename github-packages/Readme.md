export GH_USERNAME="k-tmg"
export GH_TOKEN=""
export GH_IMAGE_NAME="hello-world"
export GH_VER="latest"
export TAG_NAME="ghcr.io/$GH_USERNAME/$GH_IMAGE_NAME:$GH_VER"

echo $GH_TOKEN | docker login ghcr.io -u $GH_USERNAME --password-stdin

docker tag $GH_IMAGE_NAME:$GH_VER ghcr.io/$GH_USERNAME/$GH_IMAGE_NAME:$GH_VER

docker push ghcr.io/$GH_USERNAME/$GH_IMAGE_NAME:$GH_VER

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO