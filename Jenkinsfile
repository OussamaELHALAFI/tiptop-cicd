pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ousama4567/f2i-project-api:${BRANCH_NAME} .'
            }
        }



        stage('Branch Based Deployments') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
                        // Deployment steps for 'dev' branch
                        echo "Deploying to Development environment!"
                        // e.g., sh 'your-deployment-command-for-dev'
                    } else if (env.BRANCH_NAME == 'release') {
                        // Deployment steps for 'release' branch
                        echo "Deploying to Staging environment"
                        // e.g., sh 'your-deployment-command-for-staging'
                    } else if (env.BRANCH_NAME == 'main') {
                        // Deployment steps for 'main' branch
                        echo "Deploying to Production environment"
                        // e.g., sh 'your-deployment-command-for-prod'
                    } else {
                        echo "This is an unrecognized branch: ${BRANCH_NAME}"
                    }
                }
            }
        }
    }

}
