pipeline{
agent any
  stages {
    stage ('source') {
      steps {
        git clone git credentialsId: '55f88560-d799-4927-a9dd-e5c1658a9e79', url: 'https://github.com/veeramallusri/movie-app.git'
      }
    }
  }
}
