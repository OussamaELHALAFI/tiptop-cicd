pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                checkout scm  // This checks out the code from your repository
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // You can replace this with actual build commands for your project
                sh 'echo "Simulating build command..."'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the project...'
                // You can replace this with actual test commands for your project
                sh 'echo "Simulating test command..."'
            }
        }
    }

    post {
        always {
            echo 'This will always run after the pipeline'
        }
        success {
            echo 'Job succeeded!'
        }
        failure {
            echo 'Job failed!'
        }
    }
}
