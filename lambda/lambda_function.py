import json
import os
import boto3


def lambda_handler(event, context):
    client = boto3.client('sns')

    body = json.loads(event['body'])
    message = 'Skill: {0}.\nLevel: {1}.\nAdvanced: {2}.\nEmail: {3}.\nExample: {4}.\n'.format(
        body['skill'], body['level'], body['advanced'], body['email'], body['example'])

    try:
        response = client.publish(
            TopicArn=os.environ['SNS_TOPIC_ARN'],
            Subject='New example for career radar',
            Message=message,
        )
    except Exception:
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*",
            },
            "body": "Failure"
        }

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": "Success"
    }
