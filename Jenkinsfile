pipeline {
    agent { node { label 'linux && node12' } }

    parameters {
       choice(
           name: 'DEPLOY_ENV',
           choices: ['TODOS', 'DEV', 'HML', 'PROD'],
           description: ''
       )
    }

    environment {
        DEPLOY_PASS     = credentials('deploy_pass')
        DEPLOY_USER     = credentials('deploy_user')
        AZURE_SUBSCRIPTION_ID = credentials('azureSubscriptionId')
        AZURE_TENANT_ID = credentials('azureTenantId')
        AZURE_APP_ID = credentials('azureAppId')
        AZURE_APP_PASS = credentials('azureAppPass')
        SONAR_TOKEN     = credentials('sonar_token')
        SONAR_URL       = credentials('sonar_url')
        NEXUS_URL       = credentials('nexus_url')
        NEXUS_BASE_URL = credentials('nexus_base_url')
        NEXUS_USER = credentials('nexus_user')
        NEXUS_PASS = credentials('nexus_pass')
        DOCKER_REPOSITORY = credentials('DOCKER_REPOSITORY ')
        DOCKER_USER_LOGIN = credentials('DOCKER_USER_LOGIN ')
        DOCKER_USER_PASS = credentials('DOCKER_USER_PASS ')
        KUBECONFIG_DEV = credentials('kubeconfig_dev')
        KUBECONFIG_HML = credentials('kubeconfig_hml')
        KUBECONFIG_PRD01 = credentials('kubeconfig_prd01')
        KUBECONFIG_PRD02 = credentials('kubeconfig_prd02')
        DASA_FORTIFY_TOKEN = credentials('dasa_fortify_token')
    }

    options {
        timeout(time: 1, unit: 'HOURS')
    }
    
    stages {
        stage('DevOps-Tools'){
            steps {
                sh 'rm -rf check.status'
                 checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'devops-tools']], submoduleCfg: [], userRemoteConfigs: [[url: 'git@bitbucket.org:dasa_desenv_middleware/devops-tools.git']]])
                 checkout([$class: 'GitSCM', branches: [[name: '*/dev']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'dasa-higia-new-front-api-test']], submoduleCfg: [], userRemoteConfigs: [[url: 'git@bitbucket.org:dasa_desenv_middleware/liviatestautomationregression.git']]])                 
            }
        }
        stage('Regressive Tests') {
            when {
                branch 'dev'
                expression {
                    params.DEPLOY_ENV ==~ /TODOS|DEV/
                }
            }
            steps {
                echo 'Regressive Tests'
                dir("liviatestautomationregression") {
                    sh 'docker build -t cypress-tests .'
                    sh 'docker run cypress-tests'
                }
            }
        }
    }
}