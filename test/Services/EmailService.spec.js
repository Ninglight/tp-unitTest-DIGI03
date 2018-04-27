const assert = require('assert')

const EmailValidatorService = require('../../app/Services/EmailValidatorService')

describe('EmailValidatorService', () => {
    describe('#validation', () => {
        let emailValidatorService

        beforeEach(() => {
            emailValidatorService = new EmailValidatorService()
        })

        it('Cas nominal (john.doe@domain.tld)', () => {
            // Arrange
            // Act
            const result = emailValidatorService.email('john.doe@domain.tld')

            // Assert
            assert.equal(result, true)
        })

        it("Vérifier un jeu de donnée d'adresse email invalide", () => {
            // Arrange
            const invalidMail = [
                'john.doedomain.tld',
                'john.doe@domain',
                'john.doe@domain.t',
                '@domain.tld',
                'john@.tld',
                '@toto.fr'
            ]

            // Act
            invalidMail.forEach(email => {
                const result = emailValidatorService.email(email)

                // Assert
                assert.equal(result, false)
            })
        })
       
    })
})