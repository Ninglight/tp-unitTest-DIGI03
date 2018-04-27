class EmailValidatorService {
    /**
     * Permet la validation d'une adresse email
     *
     * @param email
     * @returns {boolean}
     */
    email(email) {
        const regex = /[a-z.]+@[a-z]+\.[a-z]{2,}/
        return regex.test(email)
    }
}

module.exports = EmailValidatorService