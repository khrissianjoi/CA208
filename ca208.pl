/* FACTS */

parents(david, george, noreen).
parents(jennifer, george, noreen).
parents(georgejr, george, noreen).
parents(scott, george, noreen).
parents(joanne, george, noreen).
parents(jessica, david, edel).
parents(clara, david, edel).
parents(michael, david, edel).
parents(laura, georgejr, susan).
parents(anna, scott, siobhan).


/* Relationships */

father(X, Y) :- parents(Y, X, _).
male(X) :- father(X, _).

mother(X, Y) :- parents(Y, _, X).
female(X) :- mother(X, _).

grandfather(X, Y) :- father(X, Z), father(Z, Y).
grandfather(X, Y) :- father(X, Z), mother(Z, Y).

grandmother(X, Y) :- mother(X, Z), mother(Z, Y).
grandmother(X, Y) :- mother(X, Z), father(Z, Y).

brother(X, Y) :- male(X), father(Z, X), father(Z, Y), X \== Y.

sister(X, Y) :- female(X), father(Z, X), father(Z, Y), X \== Y.

uncle(X, Y) :- brother(X, Z), father(Z, Y).

aunt(X, Y) :- female(X), parents(_, T, X), uncle(T, Y).

cousin(X, Y) :- grandfather(Z, X), grandfather(Z, Y), father(W, X), father(R, Y), brother(W, R), father(Z, W).

__________________________________________________________________________

%class(X,Y) :- Y == negative, negative(X), !; Y == positive, positive(X), !; Y == zero, zero(X), !.

%negative(X) :- X < 0.
%positive(X) :- X > 0.
%zero(X) :- X is 0.

class(0,zero) :- !.
class(X, positive) :- X > 0, !.
class(X, negative) :- X < 0.

split([],[],[]) :- !.
split([HI|TI], [HI|TP], N) :- split(TI, TP, N), !.
split([HI|TI], P, [HI|TN]) :- split(TI, P, TN), !.
