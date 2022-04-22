# Fhotochat

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Test task at position trainee frontend developer

## Link Project https://dimadzu.github.io/fhotochat/
![screenshot](http://joxi.ru/J2bQbKxhqg9Kkm)

### Link on [task](https://github.com/avito-tech/safedeal-frontend-trainee)


1. You need set "Create react App".
2. Then you should execute command " npm run start" or "yarn run start"
>code fragment


######function to get data from server


<getPhoto = () => {
        fetch(
                `https://boiling-refuge-66454.herokuapp.com/images`
            )
            .then(response => {
                return response.json();
            })
            .then(photo => {
                    this.setState({
                        allPhoto: photo
                    })
                }

            )
    }>


