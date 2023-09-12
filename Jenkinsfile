pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

<<<<<<< HEAD
        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t ousama4567/f2i-project-api:${BRANCH_NAME} .'
            }
        }


=======
        stage('Build API Docker Image') {
            steps {
                dir('f2i-project-Api') {
                    sh 'docker build -t ousama4567/f2i-project-api:${BRANCH_NAME} .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('f2i-project-front') {
                    sh 'docker build -t ousama4567/f2i-project-front:${BRANCH_NAME} .'
                }
            }
        }

        //uncomment below stage when you want to enable testing for API
        /*
        stage('Run API Tests') {
            steps {
                dir('f2i-project-Api') {
                    sh 'npm run test'
                    sh 'npm run test:e2e'
                    sh 'npm run test:cov'
                }
            }
        }
        */

        stage('Push API Image to Docker Hub') {
            steps {
                dir('f2i-project-Api') {
                    sh 'docker push ousama4567/f2i-project-api:${BRANCH_NAME}'
                }
            }
        }

        stage('Push Frontend Image to Docker Hub') {
            steps {
                dir('f2i-project-front') {
                    sh 'docker push ousama4567/f2i-project-front:${BRANCH_NAME}'
                }
            }
        }
>>>>>>> main

        stage('Branch Based Deployments') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
<<<<<<< HEAD
                        // Deployment steps for 'dev' branch
                        echo "Deploying to Development environment"
                        // e.g., sh 'your-deployment-command-for-dev'
                    } else if (env.BRANCH_NAME == 'release') {
                        // Deployment steps for 'release' branch
                        echo "Deploying to Staging environment"
                        // e.g., sh 'your-deployment-command-for-staging'
                    } else if (env.BRANCH_NAME == 'main') {
                        // Deployment steps for 'main' branch
                        echo "Deploying to Production environment"
                        // e.g., sh 'your-deployment-command-for-prod'
=======
                        echo "Deploying to Development environment"  
                        sh 'docker compose -f docker-compose-dev.yml up -d'
                        echo "API:3003"
                        echo "front:82"
                        echo "database:5434"     
                    } else if (env.BRANCH_NAME == 'release') {
                        echo "Deploying to Staging environment"  
                        sh 'docker compose -f docker-compose-release.yml up -d'
                        echo "API:3002"
                        echo "front:81"
                        echo "database:5433" 
                    } else if (env.BRANCH_NAME == 'main') {
                        echo "Deploying to Production environment"              
                        sh 'docker compose -f docker-compose-main.yml up -d'
                        echo "API:3001"
                        echo "front:80"
                        echo "database:5432"          
>>>>>>> main
                    } else {
                        echo "This is an unrecognized branch: ${BRANCH_NAME}"
                    }
                }
            }
        }
    }
<<<<<<< HEAD

=======
>>>>>>> main
}
